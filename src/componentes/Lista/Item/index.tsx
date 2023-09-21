import { ITarefa } from '../../../types/tarefa';
import styles from '../Lista.module.scss';

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa
}: Props) {
    console.log('item atual: ', { tarefa, tempo, selecionado, completado, id })
    return (
        <li
            className={`${styles.item} ${selecionado ? styles.itemSelecionado : ''}`}
            onClick={() => selecionaTarefa({
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            })}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}