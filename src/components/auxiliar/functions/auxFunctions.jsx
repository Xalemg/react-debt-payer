

export const calculateSum = (debts, userId) => {

    if ( debts && debts.length >= 1 ) {
        console.log(debts[0].userId===userId);
        console.log( parseFloat(debts[0].amount, 10));
        return (debts.reduce( (total ,debt) => debt.userId===userId ?
        total + parseFloat(debt.amount, 10) 
        : total - parseFloat(debt.amount, 10),0));
       } else {
        return  0;
       }   
};



