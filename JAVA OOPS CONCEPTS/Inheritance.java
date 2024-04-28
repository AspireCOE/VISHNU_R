class Animal{
    void eat(){
        System.out.println("Eating...");
    }
}
class Dog extends Animal{
    void bark(){
        System.out.println("Barking...");
    }
}
class WildDog extends Dog{
    void sleep(){
        System.out.println("Sleeping");
    }
}
public class Inheritance {
    public static void main(String args[]){
        WildDog bow=new WildDog();
        bow.eat();
        bow.bark();
        bow.sleep();
    }
}
