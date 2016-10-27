import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { AgendaService } from '../../providers/agenda-service';
import { PlataformaService } from '../../providers/plataforma-service';

 
@Component({
    selector: 'page-agenda',
    templateUrl: 'agenda.html',
    providers: [AgendaService, PlataformaService]
})
export class AgendaPage{
    public plataforma: any;
    public agenda: any;
    public hoje: any;
    public hojeDia: number;
    public hojeMes: number;
    public hojeAno: number;

    public atualMes: number;
    public atualAno: number;

    public eventoAtivo: number;

    constructor(public platform: Platform, public navCtrl: NavController, public agendaServ: AgendaService, public plataformaServ: PlataformaService){
        this.hoje = new Date();
        this.hojeDia = this.hoje.getDate();
        this.hojeMes = this.hoje.getMonth()+1;
        this.hojeAno = this.hoje.getFullYear();
        this.atualMes = this.hojeMes;
        this.atualAno = this.hojeAno;
        this.carregarAgenda();
        this.plataforma = this.plataformaServ.detectaPlataforma();
    }


    voltarPeriodo(){
        if(this.atualMes > 1){
            this.atualMes = this.atualMes - 1;
        }else{
            this.atualMes = 12;
            this.atualAno = this.atualAno - 1;
        }
        this.eventoAtivo = -1;
    }

    avancarPeriodo(){
        if(this.atualMes < 12){
            this.atualMes = this.atualMes + 1;
        }else{
            this.atualMes = 1;
            this.atualAno = this.atualAno + 1;
        }
        this.eventoAtivo = -1;
    }

    isPeriodoAtual(mes: number, ano: number){
        return (mes == this.atualMes && ano == this.atualAno)?true:false;
    }

    verificaPeriodo(mes: number, ano: number, direcao: string){

        if(direcao == 'voltar'){
            if(mes > 1){
                mes = mes - 1;
            }else{
                mes = 12;
                ano = ano - 1;
            }
        }else{
            if(mes < 12){
                mes = mes + 1;
            }else{
                mes = 1;
                ano = ano + 1;
            }
        }

        for (let key in this.agenda){
            let periodo = this.agenda[key];
            if (periodo.ano == ano && periodo.mes == mes){
                return true;
            } 
        }

        return false;
    }

    verEvento(index: number){
        this.eventoAtivo = (this.eventoAtivo != index)?index:-1;
    }

    carregarAgenda(){
        this.agendaServ.load()
            .then(data => {
                this.agenda = data;
            });
    }
}