export default function StatCard({ title, value, iconClass, bgColor }) {
    return (
      <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-2xl font-bold text-gray-700">{value}</p>
        </div>
        <div className={`${bgColor} text-white p-3 sm:p-4 rounded-full`}>
          <i className={iconClass}></i>
        </div>
      </div>
    );
  }