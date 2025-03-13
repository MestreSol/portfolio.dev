import style from './style.module.css'
import React from 'react'

type SessionProps = {
  id: string
  title: string
  children: React.ReactNode
}

// Component to render a session with a title and content
// TODO: Add a description
// TODO: Talves adicionar um sckeleton nesse componente ficaria legal
// TODO: As sessoes preicsam de um id para serem acessiveis por links
// TODO: Adicionar um botao para voltar ao topo
// TODO: Verificar a possibilidade de transformar todas as sessoes em itens colapsaveis
export default function Session(props: SessionProps) {
  return (
    <section id={props.id} className={style.session}>
      <div className={style.sessionTitle}>{props.title}</div>
      <div className={style.sessionContent}>{props.children}</div>
    </section>
  )
}
