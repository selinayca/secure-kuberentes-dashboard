// frontend/src/components/SecurityDashboard.tsx
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

interface SecurityDashboardProps {
  data: any;
}

const SecurityDashboard: React.FC<SecurityDashboardProps> = ({ data }) => {
 
  const riskData = {
    labels: ['Düşük Risk', 'Orta Risk', 'Yüksek Risk', 'Kritik'],
    datasets: [{
      data: [45, 25, 20, 10],
      backgroundColor: ['#4CAF50', '#FF9800', '#F44336', '#9C27B0'],
      borderWidth: 2
    }]
  };

  const anomalyTrendData = {
    labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'],
    datasets: [{
      label: 'Tespit Edilen Anomaliler',
      data: [12, 19, 8, 15, 22],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };

  const securityMetrics = {
    totalSecrets: 42,
    suspiciousUsers: 3,
    anomaliesDetected: 7,
    riskScore: 68,
    lastScan: new Date().toLocaleString()
  };

  return (
    <div className="security-dashboard">
      <div className="metrics-row">
        <div className="metric-card">
          <h3>Risk Skoru</h3>
          <div className={`risk-score ${getRiskLevel(securityMetrics.riskScore)}`}>
            {securityMetrics.riskScore}
          </div>
        </div>
        
        <div className="metric-card">
          <h3>Toplam Secret</h3>
          <div className="metric-value">{securityMetrics.totalSecrets}</div>
        </div>
        
        <div className="metric-card">
          <h3>Şüpheli Kullanıcı</h3>
          <div className="metric-value">{securityMetrics.suspiciousUsers}</div>
        </div>
        
        <div className="metric-card">
          <h3>Anomali Tespiti</h3>
          <div className="metric-value">{securityMetrics.anomaliesDetected}</div>
        </div>
      </div>

      <div className="charts-row">
        <div className="chart-container">
          <h3>Risk Dağılımı</h3>
          <Doughnut data={riskData} />
        </div>
        
        <div className="chart-container">
          <h3>Haftalık Anomali Trendi</h3>
          <Bar data={anomalyTrendData} />
        </div>
      </div>

      <div className="recent-alerts">
        <h3>Son Güvenlik Uyarıları</h3>
        <div className="alert-list">
          <div className="alert-item high-risk">
            <span className="alert-time">10:30</span>
            <span className="alert-message">Gece saatlerinde secret erişimi tespit edildi</span>
            <span className="alert-user">john.doe@company.com</span>
          </div>
          <div className="alert-item medium-risk">
            <span className="alert-time">09:15</span>
            <span className="alert-message">Anormal API çağrısı sıklığı</span>
            <span className="alert-user">service-account-xyz</span>
          </div>
          <div className="alert-item low-risk">
            <span className="alert-time">08:45</span>
            <span className="alert-message">Yeni namespace erişimi</span>
            <span className="alert-user">developer@company.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const getRiskLevel = (score: number): string => {
  if (score < 30) return 'low';
  if (score < 60) return 'medium';
  if (score < 80) return 'high';
  return 'critical';
};

export default SecurityDashboard;