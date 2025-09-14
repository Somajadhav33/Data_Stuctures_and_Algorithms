public class InvertedNumricPyramid {
    public static void main(String []args){
        int n = 10;
        for(int i = 0 ; i < n; i++){
            for(int j = 1; j <= n-i; j++){
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
}
