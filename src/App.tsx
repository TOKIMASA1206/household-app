import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import NoMatch from './pages/NoMatch';
import AppLayout from './components/layout/AppLayout';
import { theme } from './theme/theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Transaction } from './types/index';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase'; // Import the Firestore instance
import { formatMonth } from './utils/formatting'; // Import date-fns for date formatting

function App() {
  // Firestoreエラーかどうかを判定する型ガード
  function isFirestoreErroe(err: unknown): err is { code: string , message: string} {
    return typeof err === 'object' && err !== null && 'code' in err && 'message' in err;
  }

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  console.log("currentMonth", currentMonth);

  useEffect(() => {
    const fetchTransactions = async() => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Transactions'));
        console.log(querySnapshot);
        const transactionsData =querySnapshot.docs.map((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          return {
            ...doc.data(),
            id: doc.id,
          } as Transaction //型アサーション
        });

        console.log("transactionsData", transactionsData);
        setTransactions(transactionsData);
      } catch (error) {
        if (isFirestoreErroe(error)) {
          console.error("Firestoreのエラーは:", error.code, error.message);
        } else {
          console.error("Unexpected Error:", error);
        }
      }
    }
    fetchTransactions();
  }, []);

  const monthlyTransactions = transactions.filter((transaction) => {
    return transaction.date.startsWith(formatMonth(currentMonth));
  })

  console.log("monthlyTransactions", monthlyTransactions);

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home monthlyTransactions={monthlyTransactions} />} />
            <Route path="/report" element={<Report/>} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
