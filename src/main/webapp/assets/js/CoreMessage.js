var _CoreMessage = (function () {
	var msgList11 = "로그인이 실패하였습니다. \n\n잠시 후 다시 시도하여 주십시오.";
	var msgList12 = "비밀번호 입력 3번 실패로 인해  \n\n하루동안 같은 IP에서 로그인 할 수 없습니다.";
	var msgList13 = "비밀번호가 일치하지 않습니다. \n\n<Caps Lock>키가 눌려졌는지 확인하여 주십시오  \n\n비밀번호 3회 오류시 로그인이 거부되오니 신중히 입력하여 주십시오' ";
	var msgList14 = "ID가 등록되지 않은 사용자입니다  \n\n관련문의 : 정보지원팀 \n\n연락처 : (내선) 295, 296, 299 "
	var msgList15 = "계정 사용이 중지된 상태입니다.   \n\n관련문의 : 정보지원팀 \n\n연락처 : (내선) 295, 296, 299 "
	var msgList16 = "서비스 준비기간중입니다. "
	var msgList17 = "로그인이 실패하였습니다. \n\n권한미등록 사용자입니다. \n\n관련문의 : 정보지원팀 \n\n연락처 : (내선) 295, 296, 299 ";
	var msgList18 = "권한정보가 없어 개인정보 구성을 실패하였습니다. ";
	var msgList19 = "권한이 없습니다. ";
	var msgList20 = "Sitemap구성을 실패하였습니다. ";
	var msgList21 = "아이디가 없습니다. \n\n주민번호를 확인 후 다시 조회하시기 바랍니다! ";
	var msgList22 = "SMS 인증키가 일치하지 않습니다.";
	var msgList23 = "SMS 인증키의 한도일이 초과되었습니다. 인증키를 받시 받으시기 바랍니다.";


	var msgList101 = "저장하시겠습니까?";
	var msgList102 = "삭제하시겠습니까?";
	var msgList103 = "변경되었습니다. 저장하시겠습니까?";
	var msgList104 = "취소하시겠습니까?";
	var msgList105 = "변경하시겠습니까?";
	var msgList106 = "종료하시겠습니까?";
	var msgList107 = "출력하시겠습니까?";
	var msgList108 = "처리하시겠습니까?";
	var msgList109 = "선택한 항목을 정말로 삭제하시겠습니까?";
	var msgList112 = "선택된 항목이 없습니다.";
	var msgList113 = "두개 이상 선택되었습니다.\n한 개의 항목만 선택하십시요! ";
	var msgList114 = "파일 저장에 실패했습니다.";
	var msgList115 = "성적입력을 마감하시겠습니까?";
	var msgList116 = "수강신청을 마감하시겠습니까?";
	var msgList117 = "신청하시겠습니까?";
	var msgList118 = "접수하시겠습니까?";
	var msgList119 = "일괄처리하시겠습니까?";
	var msgList120 = "확정하시겠습니까?";
	var msgList121 = "확정취소하시겠습니까?";
	var msgList122 = "승인하시겠습니까?";
	var msgList123 = "반려하시겠습니까?";
	var msgList124 = "생성하시겠습니까?";
	var msgList125 = "추가하시겠습니까?";
	var msgList126 = "탈퇴시 수강신청, 수강조회 등 학생포털 사이트 전체를 사용할 수 없습니다.\n\n 그래도 정말 회원탈퇴하시겠습니까? ";
	var msgList127 = "인사가족사항으로 이관하시겠습니까?";
	var msgList128 = "입력된 상세내역이 있을 경우 함께 삭제됩니다. 삭제하시겠습니까?";


	var msgList201 = "조회되었습니다.";
	var msgList202 = "저장되었습니다.";
	var msgList203 = "삭제되었습니다.";
	var msgList204 = "취소되었습니다.";
	var msgList205 = "처리가 완료되었습니다.";
	var msgList206 = "변경되었습니다.";
	var msgList207 = "도움말을 참고하시기 바랍니다.";
	var msgList208 = "조회 후 추가하십시오";
	var msgList209=  "추가되었습니다."
	var msgList210 = "조회 후 저장하십시오";
	var msgList211 = "건이 생성되었습니다";
	var msgList212 = "검색조건에 해당하는 데이터가 없습니다.";
	var msgList213 = "복사되었습니다.";
	var msgList214 = "복사할 수 없습니다.";
	var msgList215 = "신청되었습니다.";
	var msgList216 = "접수되었습니다.";
	var msgList217 = "확정되었습니다.";
	var msgList218 = "확정취소되었습니다.";
	var msgList219 = "승인되었습니다.";
	var msgList220 = "반려되었습니다.";
	var msgList221 = "전송되었습니다.";
	var msgList222 = "이관되었습니다.";


	var msgList300 = "사용 가능합니다.   ";
	var msgList301 = "중복 입력되었습니다.  ";
	var msgList302 = "저장할 수 없습니다.  ";
	var msgList303 = "삭제할 수 없습니다.  ";
	var msgList304 = "다시 한 번 시도해 보시기 바랍니다.  ";
	var msgList305 = "자료가 정확하게 입력되었는지 확인하여 주시기 바랍니다.  ";
	var msgList306 = "입력하여 주시기 바랍니다.  ";
	var msgList307 = "필수 입력 항목을 확인하여 주시기 바랍니다.  ";
	var msgList308 = "일치하지 않습니다.  ";
	var msgList309 = "입력 자릿수를 확인하여 주시기 바랍니다.  ";
	var msgList310 = "입력형식이 맞지 않습니다.  ";
	var msgList311 = "항목을 먼저 입력하여 주시기 바랍니다.  ";
	var msgList312 = "삭제할 항목을 선택하여 주시기 바랍니다.  ";
	var msgList313 = "정보가 입력되지 않았습니다.  ";
	var msgList314 = "정보를 먼저 삭제하여 주시기 바랍니다.  ";
	var msgList315 = "권한이 없습니다.  ";
	var msgList316 = "자료가 이미 생성되어 있습니다. 삭제후 생성 하시겠습니까?  ";
	var msgList317 = "이관 작업을 실행 하시겠습니까?  ";
	var msgList318 = "기존 자료를 삭제하고 생성합니다. 이관 작업을 실행 하시겠습니까?  ";
	var msgList319 ="해당학기에 경건회를 수강하는 학생들의 좌석을 배정합니다.\n\n이미 배정되어 있는 경우에는 삭제한 후 재배정합니다. 계속 하시겠습니까?  ";
	var msgList320 ="저장되었습니다.\n다중전공 신청시 교양필수, 교양선택 취득학점의 변동이 일어날 수 있습니다.";
	var msgList321 ="전과신청을 하기 위한 취득학점 및 성적에 미달됩니다.";
	var msgList322 ="해당되는 학생이 없습니다.";
	var msgList323 = "이미 세번 이상 입력한 지원자 자료입니다.";
	var msgList324 = "해당 데이터가 없거나 중복된 자료입니다. \n다시 확인하십시요.";
	var msgList325 = "입력자가 아니면 수정하실 수 없습니다."
	var msgList326 = "기존 자료를 삭제하고 생성합니다. 작업을 실행 하시겠습니까?  ";
	var msgList327 = "취소할 수 없습니다.  ";
	var msgList328 = "자료가 이미 생성되어 있습니다. ";
	var msgList329 = "이미 성적 정정처리 되었습니다. ";
	var msgList330 = "성적입력이 마감되었습니다. ";
	var msgList331 = "0점 또는 100점을 입력하여 주시기 바랍니다. ";
	var msgList332 = "성정입력마감처리를 수행하지 않았습니다.";
	var msgList333 = "처리대상이 없습니다.";
	var msgList334 = "일괄 생성되었습니다.";
	var msgList335 = "일괄 생성을 실패했습니다.";
	var msgList336 = "수강신청학점의 합이 최소학점보다 작습니다. ";
	var msgList337 = "수강신청학점의 합이 최대학점보다 클 수 없습니다.";
	var msgList338 = "처리가 완료되었습니다.\n\n전공필수과목 또는 교양필수과목이 누락되었으니 확인하여 주시기 바랍니다..";
	var msgList339 = "시간표가 중복되었습니다.";
	var msgList340 = "신청할 수 없습니다.";
	var msgList341 = "접수할 수 없습니다.";
	var msgList342 = "확정할 수 없습니다.";
	var msgList343 = "확정취소할 수 없습니다.";
	var msgList344 = "승인할 수 없습니다.";
	var msgList345 = "반려할 수 없습니다.";
	var msgList346 = "관리대상 학생이 아닙니다.";
	var msgList347 = "주의 : 명시된 납부기간 이후에는 전국지점 납부가 불가능함을 유의하시기 바랍니다.";
	var msgList348 = "출석부 출력기간이 아닙니다.";
	var msgList349 = "전송할 수 없습니다.";
	var msgList350 = "탈퇴할 수 없습니다.";
	var msgList351 = "이관할 수 없습니다.";
	var msgList352 = "신입생 일련번호가 일괄변경됩니다. 계속 하시겠습니까?  ";


	var msgList401 = "오류가 발생하였습니다.  ";
	var msgList402 = "실행 중에 오류가 발생하였습니다.  ";
	var msgList403 = "응용프로그램 오류가 발생하였습니다.  ";
	var msgList404 = "시스템 오류가 발생하였습니다.  ";
	var msgList405 = "전자계산소로 문의하여 주시기 바랍니다.  ";

	var msgList547 = "작업정보에서 입력할 정보를 확인후 다시 등록하십시오.";
	var msgList601 = "세션기간이 만료 되었습니다.  ";

	var msgList1000 = "세션기간이 만료 되었습니다.  ";

	//사회교육원용 메세지 연번은 1000~ 1999
	var msgList1000 = "주민등록번호를 지정한 후\n\n저장하시기 바랍니다.  ";
	var msgList1001="사진 파일을 선택한 후\n\n저장하시기 바랍니다.  ";

	var msgList1300="수료번호를 부여했습니다!  ";
	var msgList1301="수료번호 부여가  \n\n처리되지 않았습니다!";
	var msgList1302="학번을 부여했습니다!  ";
	var msgList1303="학번번호 부여가  \n\n처리되지 않았습니다!";

	var msgList1304="수료번호를 일괄부여 하시겠습니까?  ";
	var msgList1305="학번을 일괄부여 하시겠습니까?  ";

	var msgList1400="과정과 세부과정을 선택하셔야 합니다!  ";

	var msgListSIS101 = "등록된 성적반영비율 자료가 없습니다.";
	var msgListSIS102 = "조회 후 추가를 하셔야 합니다.";
	var msgListSIS103 = "자료를 수정할 수 없습니다.";
	var msgListSIS104 = "등록된 수능반영비율 자료가 없습니다.";
	var msgListSIS105 = "입력한 수험번호와 일치하는 학생이 없습니다.";
	var msgListSIS106 = "교과성적기준등록이 일괄 생성되었습니다.";
	var msgListSIS107 = "출결성적기준등록이 일괄 생성되었습니다.";
	var msgListSIS108 = "동점자처리기준등록이 일괄 생성되었습니다.";
	var msgListSIS109 = "성적계산이 일괄 처리되었습니다.";
	var msgListSIS110 = "석차부여가 일괄 처리되었습니다..";
	var msgListSIS111 = "자료를 처리할 수 없습니다.";
	var msgListSIS112 = "산업체 입시 사정이 처리되었습니다";


	var msgListSISE101 = "Cross Check 처리되었습니다.";
	var msgListSISE102 = "Cross Check 실패하였습니다.";
	var msgListSISE103 = "데이터 이관 처리하였습니다.";
	var msgListSISE104 = "데이터 이관 실패하였습니다.";
	var msgListSISL021 = "면접번호부여가 완료되었습니다.";
	var msgListSISL022 = "해당 데이터가 없거나 오류가 발생하였습니다. \n다시 확인하십시요.";

	var msgListADM001 = "발령이 승인되었습니다.";
	var msgListADM002 = "발령 승인을 할 수 없습니다.";
	var msgListADM003 = "파일 업로드 권한을 확인하세요.";
	var msgListADM004 = "발령승인이 취소되었습니다.";
	var msgListADM005 = "발령승인 취소를 할 수 없습니다.";
	var msgListADM006 = "발급번호가 생성되어 있는 항목은 수정할 수 없습니다.";
	var msgListADM007 = "발급번호가 생성되어 있는 항목은 삭제할 수 없습니다.";
	var msgListADM008 = "선택한 년도/학기의 데이타가 이미 존재하면 \n기존 데이타는 삭제되고 다시 생성됩니다. \n강의 경력 데이타를 생성하시겠습니까?";
	var msgListADM009 = "인사이관이 완료되었습니다.";
	var msgListADM010 = "인사이관을 할 수 없습니다.";
	var msgListADM011 = "채용정보를 인사정보로 이관 하시겠습니까?.";
	var msgListADM012 = "주민등록번호가 잘못되었습니다.";
	var msgListADM013 = "발급번호가 없어 인쇄를 할 수 없습니다. 발급번호를 확인하세요.";
	var msgListADM014 = "채용번호가 반드시 필요합니다.";
	var msgListADM015 = "기준일을 입력하셔야 합니다.";
	var msgListADM016 = "발주처리 하시겠습니까?";
	var msgListADM017 = "발주취소 하시겠습니까?";
	var msgListADM018 = "전표승인을 진행 하시겠습니까? \n\n 결의서내용을 변경하셨다면 저장하였는지 확인하여 주십시오. ";
	var msgListADM019 = "가격비교사이트에서 가격비교를 하셔야만 저장가능합니다.";
	var msgListADM020 = "확정은 학과단위로만 가능합니다. \n학과를 선택한 후 확정하시길 바랍니다.";
	var msgListADM021 = "요구신청 단계가 아닙니다.";
	var msgListADM022 = "금액 자리수는 15자리를 초과할 수 없습니다.";
	var msgListADM023 = "산출근거 데이터와 구매요구내역 데이터도 삭제됩니다.\n삭제하시겠습니까?";
	var msgListADM024 = "전년도 최종예산 요구 데이터를 생성하시겠습니까?\n현재년도의 예산요구 데이터는 모두 삭제됩니다.";
	var msgListADM025 = "산출근거 데이터도 삭제됩니다.\n삭제하시겠습니까?";
	var msgListADM026 = "부서를 조회 후 하시기 바랍니다.";
	var msgListADM027 = "확정 가능한 항목이 없습니다.";
	var msgListADM028 = "확정 처리하시겠습니까?";
	var msgListADM029 = "기간 선택이 올바르지 않습니다.";
	var msgListADM030 = "물품상세내역도 삭제됩니다.\n삭제하시겠습니까?";
	var msgListADM031 = "이미지파일를 삭제하시겠습니까?";
	var msgListADM032 = "확정이 완료되었습니다.";
	var msgListADM033 = "확정처리가 불가능합니다.";
	var msgListADM034 = "해당 직종은 채용 대상이 아닙니다.";
	var msgListADM035 = "이미지 파일명은 사번과 같아야 합니다.";
	var msgListADM036 = "이미지 파일은 jpg 형식만 가능합니다.";
	var msgListADM037 = "발급을 하시겠습니까?";
	var msgListADM038 = "발급취소를 하시겠습니까?";
	var msgListADM040 = "발급이 처리되었습니다.";
	var msgListADM041 = "발급처리를 할 수 없습니다.";
	var msgListADM042 = "선택한 항목 중 발급된 항목이\n존재하므로 발급이 불가능합니다.";
	var msgListADM043 = "선택한 항목 중 발급된 항목이\n존재하므로 삭제가 불가능합니다.";
	var msgListADM044 = "발급취소가 처리되었습니다.";
	var msgListADM045 = "발급취소처리를 할 수 없습니다.";
	var msgListADM046 = "선택한 항목 중 미발급된 항목이\n존재하므로 발급취소가 불가능합니다.";
	var msgListADM047 = "조정금액이 0 이면 발주를 할 수 없습니다.";
	var msgListADM048 = "이미 발주처리를 하셨습니다.";
	var msgListADM049 = "검수가 완료되어 발주처리를 할 수 없습니다.";
	var msgListADM050 = "이미 발주취소를 하셨습니다.";
	var msgListADM051 = "검수가 완료되어 발주취소를 할 수 없습니다.";
	var msgListADM052 = "업체구분을 하시기 바랍니다.";
	var msgListADM053 = "업로드할 엑셀 파일을 선택하세요.";
	var msgListADM054 = "엑셀 파일을 업로드 하시겠습니까?";
	var msgListADM055 = "발령을 승인 하시겠습니까?";
	var msgListADM056 = "발령을 취소 하시겠습니까?";
	var msgListADM057 = "학기를 선택하시기 바랍니다.";
	var msgListADM058 = "위촉처리를 하시겠습니까?";
	var msgListADM059 = "해촉처리를 하시겠습니까?";
	var msgListADM060 = "위촉처리가 되었습니다.";
	var msgListADM061 = "해촉처리가 되었습니다.";
	var msgListADM062 = "위촉처리가 실패되었습니다.";
	var msgListADM063 = "해촉처리가 실패되었습니다.";
	var msgListADM064 = "학과를 선택하시기 바랍니다.";
	var msgListADM065 = "부서를 입력하시기 바랍니다.";
	var msgListADM066 = "부가세 포함 금액을 확인하셨습니까?";
	var msgListADM067 = "물품분류를 하셔야 저장이 가능합니다.";

	var msgListGWM001 = "결재진행중 이거나 결재완료 되어 수정 할 수 없습니다.";
	var msgListGWM002 = "결재진행중 이거나 결재완료 되어 삭제 할 수 없습니다.";
	var msgListGWM003 = "결재진행중 이거나 결재완료 되어 결재를 진행 할 수 없습니다.";
	var msgListGWM004 = "결재진행중 이거나 결재완료 되어 신규항목을 추가 할 수 없습니다.";
	var msgListGWM005 = "결재가 완료되지 않은 결의서 입니다.";
	var msgListGWM006 = "결재가 완료되지 않은 결의서 입니다. 전표생성을 할 수 없습니다.";
	var msgListGWM007 = "결재가 완료되지 않았습니다. 다음 작업을 진행 할 수 없습니다.";

	var msgListSDL001 = "분납등록금이 성공적으로 생성되었습니다.";	
	
	
    var getmsgList = function(){
    	return 'msgList' + '102';
    }		
    
    
    return {
    	getmsgList11: getmsgList11
    };		
		
}());  //This is WebSquare JavaScript Marker. Do not remove this line.
