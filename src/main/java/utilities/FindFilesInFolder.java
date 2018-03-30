package utilities;


import java.io.*;
import java.util.ArrayList;
import java.util.List;

import jxl.Workbook;
import jxl.write.Label;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import org.apache.commons.io.FilenameUtils;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class FindFilesInFolder {

    private static XSSFSheet Esheet;
    private static XSSFWorkbook Excel;
    private static XSSFCell Cell;
    private static XSSFRow Row;

    //This method is to set the File path and to open the Excel file, Pass Excel Path and Sheetname as Arguments to this method

    static File folder = new File(System.getProperty("user.dir") + "/src/main/resources/filesinfolder/");
    static String  usefulFile = null;
    private static XSSFCell Cell_1;
    private static XSSFRow Row_1;

    public static void main(String args[]) throws Exception {

      //  findFilesInfo(folder);
     //   returnCellData(findFilesInfo(folder));

    }

    public static List findFilesInfo(File folder) throws Exception {
        List<String> usefulFiles = new ArrayList<String>();
        String[] numberOfFiles = folder.list();
        for(int i =0;i<numberOfFiles.length;i++)
        {
        System.out.println("File Name:  "+numberOfFiles[i].toString());
        File fileInFolder = new File(System.getProperty("user.dir") + "/src/main/resources/filesinfolder/"+numberOfFiles[i].toString());
        System.out.println("File Size:  "+ numberOfFiles[i].toString().length());
            try {
                System.out.println("File Type:  "+fileInFolder.toURL().openConnection().getContentType());
            } catch (IOException e) {
                e.printStackTrace();
            }
            System.out.println("File Extension:  "+ FilenameUtils.getExtension(fileInFolder.toString()));
            if(FilenameUtils.getExtension(fileInFolder.toString()).equalsIgnoreCase( "csv" ) || FilenameUtils.getExtension(fileInFolder.toString()).equalsIgnoreCase( "xlsx" ) ){
                System.out.println("found valid files");

                usefulFiles.add(numberOfFiles[i].toString());
                System.out.println("CSV and Excel files count   : " + usefulFiles.size()  );
            }
        }


        return usefulFiles;
    }



    public static List returnCellData(List usefulFile) throws Exception {
        List<String> usefulFilesData = new ArrayList<String>();
        for(int i=0;i<usefulFile.size();i++) {

            XSSFSheet sheet = setExcelFile( System.getProperty( "user.dir" ) + "/src/main/resources/filesinfolder/" + usefulFile.get( i ), "Sheet1" );

            for (int j = 1; j <= sheet.getLastRowNum(); j++) {

                for (int k = 0; k < 3; k++) {
                    usefulFilesData.add(getCellData( j, k ));

                }
            }
        }

        return usefulFilesData;
    }


    public static XSSFSheet setExcelFile(String Path, String SheetName) throws Exception {
        try {
            // Open the Excel file
            FileInputStream ExcelFile = new FileInputStream(Path);
            // Access the required test data sheet
            Excel = new XSSFWorkbook(ExcelFile);
            Esheet = Excel.getSheet(SheetName);
            System.out.print("Row Count:  "  + Esheet.getLastRowNum());

        } catch (Exception e){
            throw (e);
        }
        return Esheet;
    }

    public static String getCellData(int RowNum, int ColNum) throws Exception{
        try{
            Cell = Esheet.getRow(RowNum).getCell(ColNum);
            String CellData = Cell.getStringCellValue();
            System.out.println( CellData );
            return CellData;
        }catch (Exception e){
            return"";
        }
    }


     public static void setCellData(String VenicalInfo, int ColNum,int rowNum,String resultToExcel) throws Exception	{

        try{
            System.out.print("Dvla File Path:   "  + folder.getAbsolutePath() +"/resultsoutput/"+  "results.xlsx");

            Row  = Esheet.getRow(0);
            Cell = Row.createCell(ColNum);
            Cell.setCellValue(VenicalInfo);


                Row_1 = Esheet.getRow(rowNum);
                Cell_1 = Row_1.createCell(3);
                Cell_1.setCellValue(resultToExcel);




             FileOutputStream fileOut = new FileOutputStream( folder.getAbsolutePath() +"/resultsoutput/"+  "results.xlsx");
            Excel.write(fileOut);
            fileOut.flush();
            fileOut.close();
        }catch(Exception e){
            throw (e);
        }
    }



}
