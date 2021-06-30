import React from 'react'
import moment from 'moment'
import {View, Text, StyleSheet} from 'react-native'
import { primaryColor } from '../constant'

const zeroPad = value => String(value).padStart(2, '0')
const secondsToTime = (secs) => {
  const days = Math.floor(secs / (60 * 60 * 24))
  const hours = Math.floor((secs / (60 * 60)) % 24)

  const divisor_for_minutes = secs % (60 * 60)
  const minutes = Math.floor(divisor_for_minutes / 60)

  const divisor_for_seconds = divisor_for_minutes % 60
  const seconds = Math.ceil(divisor_for_seconds)

  const obj = {
    days,
    hours,
    minutes,
    seconds
  }
  return obj
}

class Countdown extends React.Component {
  constructor () {
    super()
    this.state = {
      time: {
        // days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
      }
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      const { timeTillDate, timeOut } = this.props
      const then = moment(timeTillDate)
      const now = moment()
      const countdown = (moment(then).diff(moment(now)) / 1000)

      this.setState({
        time: secondsToTime(countdown)
      })

      // Check if we're at zero.
      if (countdown <= 0) {
        console.log('TIME OUT ', countdown)
        clearInterval(this.interval)
        timeOut()
      }
    }, 1000)
  }

  componentWillUnmount () {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  render () {
    const {
      time: { hours, minutes, seconds }
    } = this.state
    if ((!hours || hours < 0) && (!minutes || minutes < 0) && (!seconds || seconds < 0)) {
      return null
    }
    return (
      <View style={styles.wrapper}>
        <Text style={styles.timer}>{`${zeroPad(minutes)}`}</Text>
        <Text style={styles.timer}>:</Text>
        <Text style={styles.timer}>{`${zeroPad(seconds)}`}</Text>
      </View>
    )
  }
}

export default Countdown

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  timer: {
    color: primaryColor,
    fontWeight: 'bold',
    fontSize: 18,
  }
})