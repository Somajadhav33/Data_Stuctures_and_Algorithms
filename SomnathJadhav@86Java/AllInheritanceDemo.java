
//Single & Multilevel Inheritance
class A {
    void displayA() {
        System.out.println("Class A called");
    }
}

class B extends A {
    void displayB() {
        System.out.println("Class B called");
    }
}

class C extends B {
    void displayC() {
        System.out.println("Class C called");
    }
}

// Interfaces for Multiple Inheritance
interface X {
    void displayX();
}

interface Y {
    void displayY();
}

// Class implementing Multiple Inheritance
class D implements X, Y {
    public void displayX() {
        System.out.println("Class X called");
    }

    public void displayY() {
        System.out.println("Class Y called");
    }
}

// Hybrid Inheritance
class E extends A implements X {
    public void displayX() {
        System.out.println("Class X called");
    }
}

public class AllInheritanceDemo {
    public static void main(String[] args) {
        System.out.println("Name : Somnath Pandurang Jadhav | Roll No : 86");
        System.out.println("Class : BCA-III SEM-V | Subject : Java Programming");
        System.out.println("\nSingle Inheritance-");
        B objB = new B();
        objB.displayB(); 

        System.out.println("\nMultilevel Inheritance-");
        C objC = new C();
        objC.displayA(); 
        objC.displayB(); 
        objC.displayC(); 

        System.out.println("\nHierarchical Inheritance-");
        B hB = new B();
        C hC = new C();
        hB.displayB(); 
        hC.displayC(); 

        System.out.println("\nMultiple Inheritance (Interfaces) -");
        D objD = new D();
        objD.displayX();
        objD.displayY();

        System.out.println("\nHybrid Inheritance-");
        E objE = new E();
        objE.displayA(); 
        objE.displayX();
    }
}
