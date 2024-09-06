import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank{
  // define variable with var in motoko language can change the value
  var currentValue: Float = 300;
  //assignment variable
  // currentValue := 100;

  // define variable with let syntax can not change the value , same like const data type in JS
  let constanceValue = 999;
  // constanceValue := 123 // error syntax

  var taxValue = 0;
  public func topUp(amount: Float){
    currentValue +=amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdrawl(amount: Float){
    let total : Float = currentValue - amount;
    if(total >= 0){
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    }else{
      Debug.print("You can't devide that number because the nature number don't have negative number or anytype other kind!")
    }
  };

  public func checkBalance () : async Float {
    return currentValue;
  };
  
  Debug.print(debug_show(currentValue));
  Debug.print(debug_show(constanceValue));

  // define a orthogonal persistance variable;
  // khoi tao 1 bien co do ben truc giao tuc 1 local storage variable
  stable var OrthogonalPersistance : Nat = 1000;
  // OrthogonalPersistance := 2000;
  public func checkVal(): async Nat{
      return OrthogonalPersistance;
  };

  stable var timenow = Time.now();
  public func showTime(): async (){ 
    Debug.print(debug_show(timenow));
  };

  public func compound(){
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - timenow;
    let timeElapseS = timeElapsedNS / 100000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedNS));
    timenow := currentTime;
  }
  
}