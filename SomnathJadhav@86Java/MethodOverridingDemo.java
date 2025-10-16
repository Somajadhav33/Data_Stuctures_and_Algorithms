class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    // Overriding method
    void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    // Overriding method
    void sound() {
        System.out.println("Cat meows");
    }
}

public class MethodOverridingDemo {
    public static void main(String[] args) {
        System.out.println("Name : Somnath Pandurang Jadhav | Roll No : 86");
        System.out.println("Class : BCA-III SEM-V | Subject : Java Programming\n");
        Animal a1 = new Animal();
        Animal a2 = new Dog(); 
        Animal a3 = new Cat(); 

        a1.sound();  
        a2.sound();  
        a3.sound(); 
    }
}
