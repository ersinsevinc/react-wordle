import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Nasıl Oynanır" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300 my-2">
      <strong>Wordle</strong>'i 6 denemede tahmin et!</p>
      <p className="text-sm text-gray-500 dark:text-gray-300 my-2">
      Her tahmin beş harfli bir kelime olmalıdır. Tahminini göndermek için ENTER tuşuna basman gerekiyor.</p>
      <p className="text-sm text-gray-500 dark:text-gray-300 my-2">
      Tahminine ne kadar yakın olduğuna bağlı olarak harfler renklendirilecektir.</p>



      

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="correct"
        />
        <Cell value="D" />
        <Cell value="R" />
        <Cell value="E" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
       A harfi kelimede var ve doğru yerde duruyor.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" />
        <Cell value="E" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="present"
        />
        <Cell value="A" />
        <Cell value="H" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        R harfi kelimede var ancak yanlış yerde duruyor.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Y" />
        <Cell value="O" />
        <Cell value="S" />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      U harfi kelimede yok.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
      Her gün tahmin edilebilecek yeni bir kelime var!
        {/* {' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '} */}
      </p>
    </BaseModal>
  )
}
