import React from 'react';
import userAvatar from '../assets/user-avatar.png';

const ProfilePage = ({ email }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Il Mio Profilo</h2>
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center mb-6">
          <img src={userAvatar} alt="Profilo" className="w-24 h-24 rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-bold text-white">Sarki Errakui</h3>
            <p className="text-gray-400">Roma, Italia</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-2 text-white">Informazioni Personali</h4>
            <p><strong className="text-gray-300">Email:</strong> <span className="text-gray-400">{email}</span></p>
            <p><strong className="text-gray-300">Telefono:</strong> <span className="text-gray-400">+39 333 617 0230</span></p>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-white">Abbonamento</h4>
            <p><strong className="text-gray-300">Tipo:</strong> <span className="text-gray-400">Premium</span></p>
            <p><strong className="text-gray-300">Data di inizio:</strong> <span className="text-gray-400">01/01/2023</span></p>
            <p><strong className="text-gray-300">Data di scadenza:</strong> <span className="text-gray-400">31/12/2023</span></p>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-white">Metodo di Pagamento</h4>
            <p><strong className="text-gray-300">Carta:</strong> <span className="text-gray-400">**** **** **** 1234</span></p>
            <p><strong className="text-gray-300">Scadenza:</strong> <span className="text-gray-400">12/25</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;