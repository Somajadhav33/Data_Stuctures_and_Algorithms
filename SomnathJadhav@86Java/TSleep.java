public class TSleep extends Thread {

    public static void main(String argv[]) {
        System.out.println("Name : Somnath Pandurang Jadhav | Roll No : 86");
        System.out.println("Class : BCA-III SEM-V | Subject : Java Programming\n");
        TSleep t = new TSleep();
        t.start();
    }

    public void run() {
        try {
            int count = 0;
            while (!stopRequested && count < 5) {
                Thread.sleep(1000); // Pause thread for 1 second
                System.out.println("looping while: " + (count + 1));
                count++;
            }
        } catch (InterruptedException ie) {
            System.out.println("Thread interrupted!");
        }
    }

    private volatile boolean stopRequested = false;

    public void runStopExample() {
        while (!stopRequested) {
            // ...
        }
    }

    public void requestStop() {
        stopRequested = true;
    }
}
