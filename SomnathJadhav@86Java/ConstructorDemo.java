class Student {
    String name;
    int age;

    // Default Constructor
    Student() {
        name = "Somnath Jadhav";
        age = 20;
        System.out.println("Default Constructor Called");
    }

    // Parameterized Constructor
    Student(String n, int a) {
        name = n;
        age = a;
        System.out.println("Parameterized Constructor Called");
    }

    // Copy Constructor
    Student(Student s) {
        name = s.name;
        age = s.age;
        System.out.println("Copy Constructor Called");
    }

    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

public class ConstructorDemo {
    public static void main(String[] args) {
        System.out.println("Name : Somnath Pandurang Jadhav | Roll No : 86");
        System.out.println("Class : BCA-III SEM-V | Subject : Java Programming \n");

        // Default Constructor
        Student s1 = new Student();
        s1.display();
        System.out.println();

        // Parameterized Constructor
        Student s2 = new Student("Rohit", 20);
        s2.display();
        System.out.println();

        // Copy Constructor
        Student s3 = new Student(s2);
        s3.display();
    }
}
