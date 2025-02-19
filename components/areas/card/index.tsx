import React from 'react'
import CardTags from '@/components/Atomic/Card/CardTags'
import CardTitle from '@/components/Atomic/Card/CardTitle'
import CardData from '@/components/Atomic/Card/CardData'
import CardDescription from '@/components/Atomic/Card/CardDescription'
import CardButton from '@/components/Atomic/Card/CardButton'
import CardImage from '@/components/Atomic/Card/CardImage'
import style from './styles.module.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

// Definição do tipo Props para o componente Card
type Props = {
  tags: {
    name: string
    type: string
  }[]
  title: string
  description: string
  image: string
  link: string
}

// Componente Card
const Card: React.FC<Props> = (props) => {
  return (
    <>
      {props ? (
        <div className={style.card}>
          <div className={style.cardContent}>
            {/* Renderiza os componentes filhos passando as props necessárias */}
            <CardTags tags={props.tags} />
            <CardTitle title={props.title} />
            <CardData />
            <CardDescription description={props.description} />
            <CardButton link={props.link} />
          </div>
          <CardImage image={props.image} />
        </div>
      ) : (
        <div className={style.card}>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <p>
              <Skeleton height={'30vh'} width={'100vw'} />
            </p>
          </SkeletonTheme>
        </div>
      )}
    </>
  )
}

export default Card
