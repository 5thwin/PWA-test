import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { registerSW } from 'virtual:pwa-register'; //not find module error 해결: tsconfig.app.json의 include에 node_modules/vite-plugin-pwa/client.d.ts

const updateSW = registerSW({
	onNeedRefresh() {
		if (confirm('새 버전이 있습니다! 업데이트하시겠습니까?')) {
			updateSW(); // 새로운 서비스 워커를 적용하여 즉시 업데이트
		}
	},
	onOfflineReady() {
		console.log('PWA가 오프라인에서 사용할 준비가 되었습니다.');
	},
});

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
