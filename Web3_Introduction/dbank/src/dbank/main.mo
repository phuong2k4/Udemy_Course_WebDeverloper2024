import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
actor DBank{
  // define variable with var in motoko language can change the value
  var currentValue = 300;
  //assignment variable
  currentValue := 100;

  // define variable with let syntax can not change the value , same like const data type in JS
  let constanceValue = 999;
  // constanceValue := 123 // error syntax

  public func topUp(amount: Nat){
    currentValue +=amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdrawl(amount: Nat){
    currentValue -= amount;
    Debug.print(debug_show(currentValue));
  };

  Debug.print(debug_show(currentValue));
  Debug.print(debug_show(constanceValue));
}