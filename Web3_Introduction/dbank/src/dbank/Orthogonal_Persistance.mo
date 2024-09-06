import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

actor Dbank{
    stable var orthogonal_persistance = 1000;
    // if variable define by stable syntax it gonna be a orthogonal persistance variable or localstorage in js method
    orthogonal_persistance := 2000;

    public func checkValue () : async Nat{
        return orthogonal_persistance;
    }
}