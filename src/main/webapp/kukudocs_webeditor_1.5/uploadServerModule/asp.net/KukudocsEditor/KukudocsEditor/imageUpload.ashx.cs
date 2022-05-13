using System;
using System.Web;
using System.IO;
using System.Collections.Specialized;
using static System.Collections.Specialized.NameObjectCollectionBase;
using System.Drawing;

namespace KukudocsEditor
{
    public class ImageUpload : IHttpHandler
    {
        //업로드 될 폴더 경로와 Url Path의 주소를 지정.
        private const string UPLOAD_FOLDER_PATH = @"C:\Users\Administrator\Desktop\KukudocsEditor\KukudocsEditor\Upload"; // ex) "c:\\Upload"
        private const string URL_PATH = "http://localhost:8080/Upload"; // ex) "http://www.kukudocs.com/upload"

        // Client에서 전달되는 Form Data의 Name들 정의
        private const string UPLOAD_IMAGE_TYPE = "image_type";
        private const string UPLOAD_IMAGE_BASE64_TYPE = "image_base64_type";
        private const string UPLOAD_VIDEO_TYPE = "video_type";
        private const string UPLOAD_FILE_TYPE = "file_type";
        private const string UPLOAD_FLASH_TYPE = "flash_type";

        private enum FileSplit { Name = 0, Extension = 1 };

        public static Random random = new Random();

        public string GetUniqueName ()
        {
            long ticks = DateTime.Now.Ticks;
            byte[] bytes = BitConverter.GetBytes(ticks);
            string suffleName = Convert.ToBase64String(bytes).Replace('+', '_').Replace('/', '-').TrimEnd('=');

            string strCurrentDate = suffleName + DateTime.Now.ToString("yyyyMMddHHmmssffff");
            int randomCount = random.Next(0, 100000);

            return strCurrentDate + randomCount;
        }

        public void ProcessRequest(HttpContext context)
        {
            context.Response.Clear();
            context.Response.Expires = -1;

            string resultData = "";

            try
            {
                //Upload경로의 폴더가 없을경우 Directory Create!
                if (!Directory.Exists(UPLOAD_FOLDER_PATH))
                {
                    Directory.CreateDirectory(UPLOAD_FOLDER_PATH);
                }

                NameValueCollection form = context.Request.Form;
                HttpFileCollection files = context.Request.Files;
                string strFileName = "";

                if (form.Count > 0)
                {
                    KeysCollection keys = form.Keys;

                    string keyName = keys.Get(0);

                    switch (keyName)
                    {
                        //Base64 Type 형식의 String Data 를 Image로 변환
                        case UPLOAD_IMAGE_BASE64_TYPE:
                            string base64String = form.Get(UPLOAD_IMAGE_BASE64_TYPE);

                            int indexOfSemiColon = base64String.IndexOf(";", StringComparison.OrdinalIgnoreCase);
                            string dataLabel = base64String.Substring(0, indexOfSemiColon);
                            string contentType = dataLabel.Split(':')[1];
                            string extension = contentType.Split('/')[(int)FileSplit.Extension];

                            var startIndex = base64String.IndexOf("base64,", StringComparison.OrdinalIgnoreCase) + 7;
                            var fileContents = base64String.Substring(startIndex);

                            byte[] imageBytes = Convert.FromBase64String(fileContents);
                            MemoryStream ms = new MemoryStream(imageBytes, 0, imageBytes.Length);
                            ms.Write(imageBytes, 0, imageBytes.Length);
                            Image image = Image.FromStream(ms, true);

                            strFileName = this.GetUniqueName() + "." + extension;

                            image.Save(UPLOAD_FOLDER_PATH + @"\" + strFileName);

                            ms.Dispose();
                            image.Dispose();

                            resultData = "{\"url\":\"" + URL_PATH + "/" + strFileName + "\"}";

                            break;

                        default:
                            resultData = "{\"isError\":true, \"msg\" : \"" + "Invalid upload type" + "\" }";

                            break;
                    }
                }
                else if (files.Count > 0)
                {
                    string fileTypeName = files.AllKeys[0];

                    switch (fileTypeName)
                    {
                        //Type 별로 처리하고자 하는 경우에는 아래 소스코드를 수정.
                        case UPLOAD_IMAGE_TYPE:
                        case UPLOAD_VIDEO_TYPE:
                        case UPLOAD_FILE_TYPE:
                        case UPLOAD_FLASH_TYPE:
                            //전송된 File을 가져온다.
                            HttpPostedFile postedFile = files[fileTypeName];

                            //File Name의 중복문제를 피하기 위해 현재시간 + 랜덤을 통해 파일명을 변경한다.
                            strFileName = postedFile.FileName;

                            if (strFileName.Trim().Equals(string.Empty))
                            {
                                if (fileTypeName.Equals(UPLOAD_IMAGE_TYPE))
                                {
                                    Image _tempImage = Image.FromStream(postedFile.InputStream);

                                    if (System.Drawing.Imaging.ImageFormat.Jpeg.Equals(_tempImage.RawFormat))
                                    {
                                        strFileName = this.GetUniqueName() + ".jpeg";
                                    }
                                    else if (System.Drawing.Imaging.ImageFormat.Bmp.Equals(_tempImage.RawFormat))
                                    {
                                        strFileName = this.GetUniqueName() + ".bmp";
                                    }
                                    else if (System.Drawing.Imaging.ImageFormat.Gif.Equals(_tempImage.RawFormat))
                                    {
                                        strFileName = this.GetUniqueName() + ".gif";
                                    }
                                    else if (System.Drawing.Imaging.ImageFormat.Png.Equals(_tempImage.RawFormat))
                                    {
                                        strFileName = this.GetUniqueName() + ".png";
                                    }
                                    else if (System.Drawing.Imaging.ImageFormat.Emf.Equals(_tempImage.RawFormat))
                                    {
                                        strFileName = this.GetUniqueName() + ".emf";
                                    }
                                    else if (System.Drawing.Imaging.ImageFormat.Exif.Equals(_tempImage.RawFormat))
                                    {
                                        strFileName = this.GetUniqueName() + ".exif";
                                    }
                                    else if (System.Drawing.Imaging.ImageFormat.Tiff.Equals(_tempImage.RawFormat))
                                    {
                                        strFileName = this.GetUniqueName() + ".tiff";
                                    }
                                    else if (System.Drawing.Imaging.ImageFormat.Wmf.Equals(_tempImage.RawFormat))
                                    {
                                        strFileName = this.GetUniqueName() + ".wmf";
                                    }
                                    else
                                    {
                                        strFileName = this.GetUniqueName() + ".jpg";
                                    }
                                }
                            }
                            else
                            {
                                string[] splitFileName = strFileName.Split('.');                                                              

                                strFileName = this.GetUniqueName() + "." + splitFileName[splitFileName.Length - 1];
                            }                                                       

                            //지정된 위치에 파일저장
                            postedFile.SaveAs(UPLOAD_FOLDER_PATH + @"\" + strFileName);

                            //Result를 위한 JSON구조 작성
                            resultData = "{\"url\":\"" + URL_PATH + "/" + strFileName + "\"}";

                            break;
                        default:
                            resultData = "{\"isError\":true, \"msg\" : \"" + "Invalid upload type" + "\" }";

                            break;
                    }
                }
            }
            catch (Exception ex)
            {
                resultData = "{\"isError\":true, \"msg\" : \"" + ex.Message + "\" }";
            }

            if (resultData == "")
            {
                resultData = "{\"isError\":true, \"msg\" : \"" + "Empty Upload" + "\" }";
            }

            System.Diagnostics.Debug.WriteLine(resultData);

            context.Response.Write(resultData);
            context.Response.StatusCode = 200;
            context.Response.Flush();
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}
