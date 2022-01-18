import { PRIMARY_COLOR, PRIMARY_GREY_COLOR } from 'src/models/constants'

type Props = {
  selected?: boolean
}

function HealthIcon({ selected }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3Z"
        fill={selected ? PRIMARY_COLOR : ''}
        stroke={selected ? PRIMARY_COLOR : PRIMARY_GREY_COLOR}
        strokeWidth="1.5"
      />
      <path
        d="M13.65 6.00002C12.7385 6.00002 12 6.71752 12 7.60202C12 9.20452 13.95 10.661 15 11C16.05 10.661 18 9.20502 18 7.60202C18 6.71702 17.2615 6.00002 16.35 6.00002C16.0872 5.99877 15.8278 6.05984 15.5931 6.17822C15.3585 6.29659 15.1552 6.4689 15 6.68102C14.8448 6.4689 14.6415 6.29659 14.4069 6.17822C14.1722 6.05984 13.9128 5.99877 13.65 6.00002Z"
        fill="white"
        stroke={selected ? 'white' : PRIMARY_GREY_COLOR}
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default HealthIcon
