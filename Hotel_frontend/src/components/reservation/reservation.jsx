import "../../css/reservation/reservation.css";
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
const Reservation = ()=>{
return <>
    <FullCalendar plugins={[ dayGridPlugin]}
        initialView="dayGridMonth"/>   
    <div className="reservation_body">
      {/* <div className="calendar_body">
        <h1>Enero 2021</h1>
        <ol className="calendario">
          <li className="day-name">L</li>
          <li className="day-name">M</li>
          <li className="day-name">M</li>
          <li className="day-name">J</li>
          <li className="day-name">V</li>
          <li className="day-name">S</li>
          <li className="day-name">D</li>
          <li className="first-day">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
        </ol>
      </div> */}
    </div>
  </>
}
export {
  Reservation
}
// li*31{$} crea una lista de numeros