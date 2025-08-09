import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import jaLocal from '@fullcalendar/core/locales/ja' // 日本語ロケールをインポート
import "../calendar.css" // カレンダーのスタイルをインポート
import { DatesSetArg, EventContentArg } from '@fullcalendar/core'
import { Balance, CalendarContent, Transaction } from '../types/index'
import { calculateDailyBalances } from '../utils/financeCalculations'
import { formatCurrency } from '../utils/formatting'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { useTheme } from '@mui/material/styles';
import { isSameMonth } from 'date-fns'
import { useCallback, useMemo } from 'react'
// import theme from '../theme/theme'


interface CalendarProps {
  monthlyTransactions: Transaction[];
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
  setCurrentDay: React.Dispatch<React.SetStateAction<string>>;
  currentDay: string;
  today: string;
}

const Calendar = ({monthlyTransactions, setCurrentMonth, setCurrentDay, currentDay, today}:CalendarProps) => {
  const theme = useTheme();
  const dailyBalances = useMemo(() => {
    // console.log("✅ calculateDailyBalances 実行");
    return calculateDailyBalances(monthlyTransactions);
  }, [monthlyTransactions]);

  // 選択した日付に背景色をつけるイベント関数
  const backGroundEvent = useMemo(() => {
    // console.log("✅ backGroundEvent 再生成");
    return {
      start: currentDay,
      display: 'background',
      backgroundColor: theme.palette.incomeColor.light
    };
  }, [currentDay, theme]);

  // FullCalendarのイベントを生成する関数
  const createCalendarEvents = (dailyBalances: Record<string, Balance>):CalendarContent[] => {
    return Object.keys(dailyBalances).map((date) => {
      const {income, expense, balance} = dailyBalances[date];
      return {
        start: date,
        income: formatCurrency(income),
        expense: formatCurrency(expense),
        balance: formatCurrency(balance),
      };
    });
  };

  const calendarEvent = useMemo(() => {
    // console.log("✅ createCalendarEvents 実行");
    return createCalendarEvents(dailyBalances);
  }, [dailyBalances]); 

  const renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <div>
        <div className='money' id="event-income" >
          {eventInfo.event.extendedProps.income}
        </div>
        <div className='money' id="event-expense" >
          {eventInfo.event.extendedProps.expense}
        </div>
        <div className='money' id="event-balance" >
          {eventInfo.event.extendedProps.balance}
        </div>
      </div>
    )
  }

  const handleDateSet = useCallback((datesetInfo: DatesSetArg) => {
    // console.log("✅ handleDateSet 関数呼び出し");
    const currentMonth = datesetInfo.view.currentStart;
    setCurrentMonth(currentMonth);
    const todayDate = new Date();
    if (isSameMonth(todayDate, currentMonth)) {
      setCurrentDay(today);
    }
  }, [setCurrentMonth, setCurrentDay, today]);

  const handleDateClick = useCallback((dateClickInfo: DateClickArg) => {
    // console.log("✅ handleDateClick 関数呼び出し");
    setCurrentDay(dateClickInfo.dateStr);
  }, [setCurrentDay]);

  return (
    <FullCalendar
      locale={jaLocal} // 日本語ロケールを指定
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView='dayGridMonth'
      events={[...calendarEvent, backGroundEvent]} // イベントを設定
      eventContent={renderEventContent}
      datesSet={handleDateSet}
      dateClick={handleDateClick}
    />
  )
}

export default Calendar