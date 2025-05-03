import moment from 'moment'

export const formatDate = (dateString) => {
    return moment(dateString).format('YYYY-MM-DD')
}

export const formatDateTime = (dateString) => {
    return moment(dateString).format('YYYY-MM-DD HH:mm')
}

export const formatRelativeTime = (dateString) => {
    return moment(dateString).fromNow()
}

export default {
    formatDate,
    formatDateTime,
    formatRelativeTime
}
