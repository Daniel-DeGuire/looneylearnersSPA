export default (st) => `
<section id="jumbotron">
<h2>Savvy Coders Jan. 2020 Cohort</h2>
    <a href="">"Call to Action" "Button"</a>
  </section>
  Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
  like ${kelvinToFahrenheit(st.weather.feelsLike)}F
  `;

const kelvinToFahrenheit = (kelvinTemp) =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
