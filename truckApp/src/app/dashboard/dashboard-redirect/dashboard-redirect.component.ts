
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/dashboard/auth-severs/auth.service';


// @Component({
//     selector: 'app-dashboard-redirect',
//     templateUrl: './dashboard-redirect.component.html',
//     styleUrls: ['./dashboard-redirect.component.scss'],
//   })
// export class DashboardRedirectComponent implements OnInit {

//   constructor(private auth: AuthService, private router: Router) { }

//   ngOnInit(): void {
//     const user = this.auth.getCurrentUser(); // نفترض ترجع بيانات المستخدم
//     if (!user) {
//       // المستخدم غير مسجل → توجه لصفحة تسجيل الدخول
//       this.router.navigate(['/login']);
//     } else {
//       // المستخدم مسجل → توجه حسب الدور
//       if (user.role === 'driver') {
//         this.router.navigate(['/driver']);
//       } else if (user.role === 'customer') {
//         this.router.navigate(['/customer']);
//       } else {
//         // خيار احتياطي
//         this.router.navigate(['/login']);
//       }
//     }
//   }
// }
