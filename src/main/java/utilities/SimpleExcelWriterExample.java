package utilities;

import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

/**
 * A very simple program that writes some data to an Excel file
 * using the Apache POI library.
 * @author www.codejava.net
 *
 */
public class SimpleExcelWriterExample {

   /* public static void main(String[] args) throws IOException {
        for (int i=0; i < 10; i++) {
            setCellData( "MainResult", i, 1 );
        }
    }

    public static void setCellData(String Result, int RowNum, int ColNum) throws IOException {

    FileOutputStream fileOut = new FileOutputStream( "C:\\Users\\jvendi\\Downloads\\GITJagsPracticeFrom\\homeofficetest\\src\\main\\resources\\filesinfolder\\resultsoutput\\results.xls" );
    HSSFWorkbook workbook = new HSSFWorkbook();
    HSSFSheet worksheet = workbook.createSheet( "POI Worksheet" );

    // index from 0,0... cell A1 is cell(0,0)
    HSSFRow row1 = worksheet.createRow( (short) RowNum);

    HSSFCell cellA1 = row1.createCell( (short) ColNum );
            cellA1.setCellValue(Result);




            workbook.write(fileOut );
        //    fileOut.flush();
          //  fileOut.close();

}


*/




}