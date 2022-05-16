package yerp.common.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import yerp.common.annotation.CommonParam;

@Controller
public class PageController {

	@GetMapping(value = "/page/ssoLogin")
	public String ssoLoginPage(@CommonParam Map<String, Object> parameter, HttpSession session,
			HttpServletRequest request) {
		return "ssoLogin";
	}

	@GetMapping(value = "/page/ssoLoginPopup")
	public String ssoLoginPopupPage(@CommonParam Map<String, Object> parameter, HttpSession session,
			HttpServletRequest request) {
		return "ssoLoginPopup";
	}

	@GetMapping(value = "/page/report")
	public String reportPage(@CommonParam Map<String, Object> parameter, HttpSession session,
			HttpServletRequest request) {
		return "report";
	}

	@GetMapping(value = "/")
	public String index(@CommonParam Map<String, Object> parameter, HttpSession session,
			HttpServletRequest request) {
		return "websquare";
	}
	
	@GetMapping(value = "/login")
	public String login(@CommonParam Map<String, Object> parameter, HttpSession session,
			HttpServletRequest request, Model model) {
		model.addAttribute("w2xPath", "/login.xml");
		return "websquare";
	}
	
	@GetMapping(value = "/index")
	public String index_model(@CommonParam Map<String, Object> parameter, HttpSession session,
			HttpServletRequest request, Model model) {
		model.addAttribute("w2xPath", "/index.xml");
		return "websquare";
	}
	
}