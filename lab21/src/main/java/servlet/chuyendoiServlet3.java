package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/chuyendoi")
public class chuyendoiServlet3 extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        double miles = Double.parseDouble(request.getParameter("mile"));

        double km = miles / 0.621371;

        request.setAttribute("result", km);
        response.setContentType("text/html;charset=UTF-8");
        
        request.getRequestDispatcher("chuyendoi.jsp")
               .forward(request, response);
    }
}