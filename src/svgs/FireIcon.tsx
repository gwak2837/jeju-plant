import { PRIMARY_COLOR, PRIMARY_GREY_COLOR } from 'src/models/constants'

type Props = {
  selected?: boolean
}

function FireIcon({ selected }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M20.0492 10.9969C19.5942 9.97281 18.9328 9.05364 18.1063 8.2969L17.4242 7.67111C17.4011 7.65045 17.3732 7.63578 17.343 7.62841C17.3129 7.62103 17.2814 7.62116 17.2513 7.6288C17.2212 7.63644 17.1935 7.65134 17.1705 7.6722C17.1475 7.69307 17.13 7.71925 17.1195 7.74846L16.8148 8.62268C16.625 9.17111 16.2758 9.73127 15.7812 10.2821C15.7484 10.3172 15.7109 10.3266 15.6852 10.3289C15.6594 10.3313 15.6195 10.3266 15.5844 10.2938C15.5516 10.2656 15.5352 10.2235 15.5375 10.1813C15.6242 8.77033 15.2023 7.17893 14.2789 5.4469C13.5148 4.00783 12.4531 2.88518 11.1266 2.10236L10.1586 1.53283C10.032 1.45783 9.87031 1.55627 9.87734 1.70393L9.92891 2.82893C9.96406 3.59768 9.875 4.27736 9.66406 4.84221C9.40625 5.53361 9.03594 6.1758 8.5625 6.75236C8.23302 7.15306 7.85959 7.51549 7.44922 7.83283C6.46087 8.5926 5.65722 9.56611 5.09844 10.6805C4.54103 11.8046 4.25068 13.0422 4.25 14.2969C4.25 15.4031 4.46797 16.4742 4.89922 17.4844C5.31562 18.457 5.91654 19.3396 6.66875 20.0836C7.42813 20.8336 8.30938 21.4242 9.29141 21.8344C10.3086 22.261 11.3867 22.4766 12.5 22.4766C13.6133 22.4766 14.6914 22.261 15.7086 21.8367C16.6882 21.429 17.579 20.8343 18.3312 20.086C19.0906 19.336 19.6859 18.4594 20.1008 17.4867C20.5314 16.4793 20.7523 15.3948 20.75 14.2992C20.75 13.1555 20.5156 12.0446 20.0492 10.9969V10.9969Z"
        fill={selected ? PRIMARY_COLOR : ''}
        stroke={selected ? PRIMARY_COLOR : PRIMARY_GREY_COLOR}
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default FireIcon
