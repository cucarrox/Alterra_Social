import styles from "../styles/Avatar.module.css"

// Necessário uma interface para o uso de props
interface AvatarProps {
  src: string;
  hasBorder?: boolean;
  alt?: string;
}

export function Avatar({ hasBorder = false, src }: AvatarProps){

  return (
    <>
      <img
        className={`${hasBorder ? styles.avatarBorder : styles.avatar} w-16 h-16`}
        src={src}
      />
    </>
  );
}
