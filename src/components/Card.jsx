/* eslint-disable react/prop-types */
export default function Card({ children, bg = 'bg-gray-100' }) {
  return (
    <div className={`${bg} p-6 rounded-xl shadow-md`}>
      {children}
    </div>
  )
}
