import java.util.Scanner;

public class Main{
    public static void main(String[] args) {
        System.out.print("Enter number : ");
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int i = 1;
        while (i <= n){
            int j = 1;
            // int k = 1;
            // while (k <= n - i){
            //     System.out.print("   ");
            //     k++;
            // }
            while (j <= i){
                System.out.print(j);
                j++;
            }
            System.out.println();
            i++;
        }
        sc.close();
    }
}

// 1 * 2 - 1 =  1 
// 2 * 2 - 1 = 3
// 3 * 2 - 1 = 5
// 7
// 5 * 2 - 1 = 9

// 2 * i - 1 
//              * 
//           *  *  *
//        *  *  *  *  *
//     *  *  *  *  *  *  *
//  *  *  *  *  *  *  *  *  *