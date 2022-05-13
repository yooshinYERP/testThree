        /// <summary>
        /// 예약 SMS발송
        /// </summary>
        /// <param name="sender">발송자전화번호(학교, 부서, 담당자등..) ex)0317401243</param>
        /// <param name="receiverCounter">보낼사람갯수</param>
        /// <param name="receiver">보낼전화번호 ex)01030461111</param>
        /// <param name="message">메제지 ex)결재가 완료되었습니다.</param>
        /// <param name="reservedDT">예약시간 형식)20080101090000 format:yyyyMMddhhmmss(24h)</param>
        /// <returns>MsgID 입력된 메세지ID를 넘겨준다.</returns>
        public static string sendSMSMessage2(string sender, int receiverCount, string receiver, string message, string reservedDT)
        {
            string strCommandString = string.Empty;
            string strMsgID = string.Empty;
            int iSCHEDULE_TYPE = 0;

            System.Data.SqlClient.SqlParameter[] sqlParams = null;

            try
            {

                // 넘어온 발송자 정보에 이름부분이 없으면 이름을 넣어줍니다.
                if (receiver.IndexOf("^") == -1)
                {
                    receiver = String.Format("{0}^{0}", receiver);
                }
                else if (receiver.IndexOf("^") == 0)
                {
                    receiver = String.Format("{0}{0}", receiver);
                }


                // 예약일시를 입력하였다면 예약발송으로 간주한다.
                if (reservedDT.Length > 0)
                {
                    iSCHEDULE_TYPE = 1;
                }

                sqlParams = new SqlParameter[7];
                sqlParams[0] = new SqlParameter("@SCHEDULE_TYPE", SqlDbType.Int);     // 발송형식 (즉시:0, 예약:1)
                sqlParams[1] = new SqlParameter("@SMS_MSG", SqlDbType.VarChar, 200);   // 메세지내용
                sqlParams[2] = new SqlParameter("@SEND_DATE", SqlDbType.VarChar, 20);     // 발송일시(예약시) yyyyMMddhhmmss
                sqlParams[3] = new SqlParameter("@CALLBACK", SqlDbType.VarChar, 20);     // 회신번호(발송자번호) ex) 01088889999
                sqlParams[4] = new SqlParameter("@DEST_COUNT", SqlDbType.Int);            // 수신자갯수 Max(100)
                sqlParams[5] = new SqlParameter("@DEST_INFO", SqlDbType.VarChar, 3000);  // 수신자정보 ex) 홍길동^01033334444|일지매^0101112222
                sqlParams[6] = new SqlParameter("@MSG_ID", SqlDbType.Int);             // 메세지 고유ID	

                sqlParams[0].Value = iSCHEDULE_TYPE;                    // 발송형식 (즉시:0, 예약:1)
                sqlParams[1].Value = message;                           // 메세지내용
                sqlParams[2].Value = reservedDT;                        // 발송일시(예약시) yyyyMMddhhmmss
                sqlParams[3].Value = sender;                            // 회신번호(발송자번호) ex) 01088889999
                sqlParams[4].Value = 1;                                 // 수신자갯수 Max(100)
                sqlParams[5].Value = receiver;                          // 수신자정보 ex) 홍길동^01033334444|일지매^0101112222
                sqlParams[6].Direction = ParameterDirection.Output;     // 메세지 고유ID	

                strCommandString = "dbo.SMART_NewSMSMessage_Send"; // SP명실행

                if (msSqlExec(strCommandString, sqlParams) > 0)
                {
                    strMsgID = sqlParams[6].Value.ToString();
                }

            }
            finally
            {

            }

            return strMsgID;
        }