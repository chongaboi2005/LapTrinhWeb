package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/convert")
public class chuyendoiServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,HttpServletResponse response)
            throws ServletException, IOException {

        double miles = Double.parseDouble(request.getParameter("mile"));
        double km = miles / 0.621371;
        request.setAttribute("result", km);
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out=response.getWriter())
        {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<title>Kết quả chuyển đổi</title>");
            out.println("<body>");
            out.println("<h1>Kết quả chuyển "+miles+"mile-->km:"+km);            
            out.println("</body>");
            out.println("</html>");
        }
        // request.getRequestDispatcher("doikm.jsp")
        //        .forward(request, response);
    }
}