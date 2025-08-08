// アイコンのimport
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AlarmIcon from '@mui/icons-material/Alarm';
import TrainIcon from '@mui/icons-material/Train';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AddHomeIcon from '@mui/icons-material/AddHome';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WorkIcon from '@mui/icons-material/Work';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import SavingsIcon from '@mui/icons-material/Savings';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { ExpenseCategory, IncomeCategory } from '../../types';

// カテゴリごとのアイコン定義
export const IconComponents: Record<IncomeCategory | ExpenseCategory, React.ReactElement> = {
  // 支出カテゴリ
  食費: <FastfoodIcon fontSize="small" />,
  日用品: <AlarmIcon fontSize="small" />,
  交通費: <TrainIcon fontSize="small" />,
  光熱費: <LightbulbIcon fontSize="small" />,
  住居費: <AddHomeIcon fontSize="small" />,
  娯楽費: <SportsTennisIcon fontSize="small" />,
  交際費: <Diversity3Icon fontSize="small" />,

  // 収入カテゴリ
  給与: <WorkIcon fontSize="small" />,
  副収入: <AddBusinessIcon fontSize="small" />,
  お小遣い: <SavingsIcon fontSize="small" />,
  その他: <QuestionMarkIcon fontSize="small" />,
};
