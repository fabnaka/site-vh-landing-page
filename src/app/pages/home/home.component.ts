import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    TagModule,
    GalleriaModule,
    ImageModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextareaModule,
    RouterModule,
    InputMaskModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: { ngSkipHydration: 'true' }
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  responsiveOptions: any[] | undefined;
  formGroup: FormGroup;
  servicos: any[] = [];

  images: any[] | undefined;

  artistas_array: any[] = [
    { nome: 'VH', foto: './../../../assets/images/artistas/vh.jpg' },
    { nome: 'PEDRO CORREA', foto: './../../../assets/images/artistas/pedro1.jpg' },
    { nome: 'KAROL ALONSO', foto: './../../../assets/images/artistas/karol1.jpg' },
    { nome: 'PADOVA', foto: './../../../assets/images/artistas/vh.jpg' },
    //{ nome: 'LOREN', foto: './../../../assets/images/artistas/vh.jpg' },
    //{ nome: 'KRONE', foto: './../../../assets/images/artistas/vh.jpg' },
    { nome: 'GNESIS', foto: './../../../assets/images/artistas/gnesis.jpg' },
    { nome: 'JAY JENNER', foto: './../../../assets/images/artistas/jay.jpg' },
    //{ nome: 'IRIS', foto: './../../../assets/images/artistas/vh.jpg' },
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.formGroup = this.fb.group({
      name: [undefined],
      phone: [undefined],
      email: [undefined],
      message: [undefined],
    });
  }

  ngOnInit() {
    this.products = [
      {
        name: 'PRIVADOS',
        image: 'privado2.jpeg',
      },
      {
        name: 'CORPORATIVOS',
        image: 'corporativo.jpg',
      },
      {
        name: 'LABELS/BARES/BALADAS/EVENTUAIS',
        image: 'bares.jpeg',
      },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

    this.images = [
      { itemImageSrc: './../../../assets/images/home-carrosel/3.jpg' },
      { itemImageSrc: './../../../assets/images/home-carrosel/2.jpg' },
    ];

    this.router.navigate(['/']);

    this.servicos = [
      {
        name: 'Churasqueira',
        image: './../../../assets/images/artistas/vh.jpg',
      },
      {
        name: 'Churasqueira',
        image: './../../../assets/images/artistas/vh.jpg',
      },
      {
        name: 'Churasqueira',
        image: './../../../assets/images/artistas/vh.jpg',
      },
      {
        name: 'Churasqueira',
        image: './../../../assets/images/artistas/vh.jpg',
      },
      {
        name: 'Churasqueira',
        image: './../../../assets/images/artistas/vh.jpg',
      },
      {
        name: 'Churasqueira',
        image: './../../../assets/images/artistas/vh.jpg',
      },
    ];
  }

  goContato() {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  }

  enviarEmail() {

    let nome = this.formGroup.get('name')?.value
    //let phone = this.formGroup.get('phone')?.value
    let message = this.formGroup.get('message')?.value

    if( !nome || !message ) {
      return
    }

    const email = 'instage.agency@gmail.com';
    const assunto = `Contato de ${nome}, ` ;
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(message)}`;

    // Redireciona o navegador para o link 'mailto'
    window.location.href = mailtoLink;
  }
}