document.write("<table><h1>Таблица умножения</h1><tr><td> </td>");
for (i = 1; i <=9; i++) document.write("<td>"+i+" </td>");
document.write("</tr>");
for (i = 1; i <=9; i++)
  {
      document.write("<tr><td>" + i + " </td>");
      for (j = 1; j <= 9; j++)
  {
document.write("<td bgcolor='#d1d1d1'>" + (i*j) + " </td>");}
document.write("</tr>");
}
document.write("</table>");
