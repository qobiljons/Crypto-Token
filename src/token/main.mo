import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Bool "mo:base/Bool";

actor Token {
    var owner: Principal = Principal.fromText("hfgvs-km5qm-jsyts-dwgro-cdxyj-vzk35-j53fv-d5jh6-pf7tr-vbc47-eae");
    var totalSupply: Nat = 1_000_000_000;
    var symbol: Text = "DANG";


    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    
    
    balances.put(owner, totalSupply);

    public query func balanceOf(who: Principal): async Nat {
        let balance: Nat = switch (balances.get(who)){
            case null 0;
            case (?result) result;
        };

        return balance;
    };

    public query func getSymbol(): async Text{
        return symbol;
    };

    public shared(msg) func payOut(): async Bool {
        if (balances.get(msg.caller) == null){
        let amount = 10000;
        balances.put(msg.caller,  amount);
        return true;
        } else {
            return false;
        }
    };

    public shared(msg) func transfer(to: Principal, amount: Nat): async Bool {
        return true
    }



}