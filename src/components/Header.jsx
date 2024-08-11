import { useSelector } from "react-redux"

const Header = () => {

  const { isLoading, error, flights } = useSelector ((store) => store.flightReducer)

  return (
    <header>
        <div>
            <img src="/plane-logo.png" alt="plane-logo" />
            <h2>Uçuş Radarı</h2>
        </div>

        <h3>
          {isLoading
            ? "Uçuşlar aranıyor..."
            : error
            ? "Hata: " + error
            : `${flights.length} Uçuş Bulundu`}
        </h3>
    </header>
  )
}

export default Header