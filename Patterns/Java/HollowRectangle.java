public class HollowRectangle {
   public static void main(String args[]){
        int n = 10;
        for(int i = 1; i <= n; i++){
            if(i == 1 || i == n){
                for(int j = 1; j <= n; j++){
                    System.out.print("* ");
                }
            }else{
                System.out.print("* ");
                for(int k = 1; k <= n-2; k++){
                    System.out.print("  ");
                }
                System.out.print("* ");
            }
            System.out.println();
        }
   }
    
}