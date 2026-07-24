import java.io.*;
class Test1
{
    public static void main(String[] args) throws Exception 
    {
        File f1 = new File("note.txt");
        System.out.println(f1.createNewFile());//true
        System.out.println(f1.isFile());//true
        System.out.println(f1.isDirectory());//false
        System.out.println(f1.getName());//note.txt
        System.out.println(f1.length());//0
        System.out.println(f1.canRead());//true
        //System.out.println(f1.canWrite());//true
        System.out.println(f1.canExecute());//(true) -->in mac it is false
        f1.setWritable(false);
        System.out.println(f1.canWrite());//false
        System.out.println(f1.getAbsolutePath());///Users/riteekasingh/Desktop/Practice/JAVAPROGRAM/File_Handling/note.txt
        System.out.println(f1.renameTo(new File("diary.txt")));//diary.txt

    }
}