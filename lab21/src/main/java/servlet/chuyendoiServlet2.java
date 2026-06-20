package servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ketqua")
public class chuyendoiServlet2 extends HttpServlet {

    protected void doPost(HttpServletRequest request,HttpServletResponse response)
            throws ServletException, IOException {

        double miles = Double.parseDouble(request.getParameter("mile"));

        double km = miles / 0.621371;

        request.setAttribute("result", km);
        response.setContentType("text/html;charset=UTF-8");
        
        request.getRequestDispatcher("/project1/result.jsp").forward(request, response);
    }
}