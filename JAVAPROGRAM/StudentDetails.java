class StudentDetails
{
    public static void main(String[] args) throws Exception
    {
        java.io.BufferedReader obj = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));

        System.out.println("Enter Student name:");
        String Sname=obj.readLine();

        System.out.println("Enter Student Rollno:");
        int Sroll=Integer.parseInt(obj.readLine());

        System.out.println("Enter Student Mark:");
        double Smark=Double.parseDouble(obj.readLine());
        
        System.out.println();
        System.out.println(Sname);
        System.out.println(Sroll);
        System.out.println(Smark);
    }
}