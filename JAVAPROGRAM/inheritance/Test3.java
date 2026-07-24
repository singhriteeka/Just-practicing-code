//Multilevel inheritance
class A
{
    int a = 10;
}
class B extends A
{
    int b = 20;
}
class C extends B
{
    int c = 30;
}

class Test3
{
    public static void main(String[] args) {
        A obj1 = new A();
        System.out.println(obj1.a);
        //System.out.println(obj1.b);//error
        //System.out.println(obj1.c);//error

        System.out.println();

        B obj2 = new B();
        System.out.println(obj2.a);
        System.out.println(obj2.b);
        //System.out.println(obj2.c);//error

        System.out.println();

        C obj3 = new C();
        System.out.println(obj3.a);
        System.out.println(obj3.b);
        System.out.println(obj3.c);
    }
}