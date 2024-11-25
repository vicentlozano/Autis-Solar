import { boot } from 'quasar/wrappers'
import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'

export default boot(({ app }) => {
  // Configuraciones globales de Highcharts
  Highcharts.setOptions({
    lang: {
      loading: 'Cargando...',
      months: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    }
  })

  // Hacer que Highcharts esté disponible globalmente
  app.config.globalProperties.$highcharts = Highcharts

  // Configurar Highcharts Vue
  app.use(HighchartsVue)
})