export type TransactionType = 'income' | 'expense';
export type IncomeCategory = '給与' | '副収入' | 'お小遣い' | 'その他';
export type ExpenseCategory = '食費' | '日用品' | '交通費' | '光熱費' | '住居費' | '娯楽費' | '交際費' ;

export interface Transaction {
  id: string,
  date: string;
  amount: number,
  content: string,
  type: TransactionType,
  category: IncomeCategory | ExpenseCategory;
}

export interface Balance {
    income: number,
    expense: number,
    balance: number,
}