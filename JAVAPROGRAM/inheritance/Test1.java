//Single inheritance
class A
{
    int a = 10;
}
class B extends A
{
    int b = 20;
}

class Test1
{
    public static void main(String[] args) {
        A obj1 = new A();
        System.out.println(obj1.a);
        //System.out.println(obj1.b);

        System.out.println();

        B obj2 = new B();
        System.out.println(obj2.a);
        System.out.println(obj2.b);
    }
}