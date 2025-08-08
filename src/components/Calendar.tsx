import FullCalendar from '@fullcalendar/react'
import React from 'react'
import dayGridPlugin from '@fullcalendar/daygrid'
import jaLocal from '@fullcalendar/core/locales/ja' // 日本語ロケールをインポート
import "../calendar.css" // カレンダーのスタイルをインポート
import { EventContentArg } from '@fullcalendar/core'
import { Balance, CalendarContent, Transaction } from '../types/index'
import { calculateDailyBalances } from '../utils/financeCalculations'
import { formatCurrency } from '../utils/formatting'

interface CalendarProps {
  monthlyTransactions: Transaction[];
}

const Calendar = ({monthlyTransactions}:CalendarProps) => {
  const dailyBalances = calculateDailyBalances(monthlyTransactions);

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

  const calendarEvent = createCalendarEvents(dailyBalances)

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

  return (
    <FullCalendar
      locale={jaLocal} // 日本語ロケールを指定
      plugins={[dayGridPlugin]}
      initialView='dayGridMonth'
      events={calendarEvent}
      eventContent={renderEventContent}
    />
  )
}

export default Calendar