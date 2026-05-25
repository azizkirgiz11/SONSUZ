import style from "../styles/Booking.module.css"

const Reservation = () => {
  return (
    <section className={style.reservation}>
      <div className={style.reservationContainer}>

        <div className={style.reservationTitle}>
          <p className={style.reservationSubtitle}>SONSUZ</p>
          <h2>БРОНИРОВАНИЕ СТОЛИКА</h2>
          <span>Забронируйте столик онлайн</span>
        </div>

        <div className={style.reservationContent}>

          <div className={style.reservationImage}>
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
              alt="restaurant"
            />
          </div>

          <div className={style.reservationForm}>
            <div className={style.formGrid}>
              <div>
                <label>Имя</label>
                <input type="text" placeholder="Ваше имя" />
              </div>
              <div>
                <label>Телефон</label>
                <input type="text" placeholder="+996 ___ __ __ __" />
              </div>
            </div>

            <div className={style.formGrid}>
              <div>
                <label>Количество гостей</label>
                <select>
                  <option>2 гостя</option>
                  <option>3 гостя</option>
                  <option>4 гостя</option>
                  <option>5 гостей</option>
                  <option>6 гостей</option>
                </select>
              </div>
              <div>
                <label>Время</label>
                <input type="time" />
              </div>
            </div>

            <div>
              <label>Комментарий</label>
              <textarea rows="5" placeholder="Ваш комментарий"></textarea>
            </div>

            <button>ЗАБРОНИРОВАТЬ СТОЛИК</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Reservation